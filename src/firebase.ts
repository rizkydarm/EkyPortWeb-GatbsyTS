import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);

export type PortfolioItem = {
    id: string;
    orderid?: string;
    title: string;
    description: string;
    link: string;
    icons: string[];
    images?: string[];
}

export type CVItem = {
  id: string;
  name: string;
  url: string;
}

export const fetchPortfolioData = async () => {
    try {
        const portfolioCollection = collection(db, "portfolio"); // Reference to the "portfolio" collection
        const querySnapshot = await getDocs(portfolioCollection); // Fetch all documents

        const portfolioData: PortfolioItem[] = [];
        querySnapshot.forEach((doc) => {
            // Push each document's data along with its ID into the array
            const port = doc.data() as PortfolioItem;
            portfolioData.push({ id: doc.id, orderid: port.orderid, title: port.title, description: port.description, link: port.link, icons: port.icons, images: port.images });
        });

        console.log("Fetched Portfolio Data:", portfolioData);
        return portfolioData; // Return the array of documents
    } catch (error) {
        console.error("Error fetching portfolio data: ", error);
        throw error; // Re-throw the error for handling elsewhere if needed
    }
};

// Function to get the download URL for an image
export const getStorageFileUrl = async (imagePath: string) => {
  try {
    const storage = getStorage(); // Initialize Firebase Storage
    const imageRef = ref(storage, imagePath); // Reference to the image file
    const url = await getDownloadURL(imageRef); // Get the download URL
    console.log("Storage File URL:", url);
    return url;
  } catch (error) {
    console.error("Error fetching storage file URL:", error);
    throw error;
  }
};