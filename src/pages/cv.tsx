import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { getStorageFileUrl } from '../firebase';
import ImageFire from '../components/ImageFire';

const CVPage = () => {

  const [cvUrl, setCVUrl] = React.useState("");

    React.useEffect(() => {
        const fetchImageUrl = async () => {
            try {
                const url = await getStorageFileUrl("rizkycv.pdf");
                setCVUrl(url);
            } catch (error) {
                console.error("Failed to load image:", error);
            }
        };

        fetchImageUrl();

    }, []);
  
  return (
    <Layout name="My CV">
      <div style={{ position: 'fixed', margin: '16px'}} >
        <a href={cvUrl} download="rizkycv.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Download PDF
          </Button>
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '24px' }}>
        <ImageFire image={"/cv1.jpg"} height={1000} />
        <br />
        <ImageFire image={"/cv2.jpg"} height={1000} />
      </div>
    </Layout>
  );
};

export default CVPage;