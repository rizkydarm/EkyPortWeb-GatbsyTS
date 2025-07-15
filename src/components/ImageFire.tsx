import React, { useEffect, useState } from "react";
import { getStorageFileUrl } from "../firebase";
import { Box, CircularProgress } from "@mui/material";  

const ImageFire: React.FC<{ image: string, height?: number, width?: number }> = ({ image, height, width }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            try {
                const url = await getStorageFileUrl(image);
                setImageUrl(url);
            } catch (error) {
                console.error("Failed to load image:", error);
            }
        };

        fetchImageUrl();

    }, []);

    return (
        <div>
            {imageUrl && imageUrl.length > 0 ?
                <img src={imageUrl} alt={image} style={{ width: '100%', height: height ?? '100%', objectFit: 'contain' }} />
                :
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    height={height ?? 600}
                    width={width ?? '100%'}
                >
                    <CircularProgress />
                </Box>
            }
        </div>
    );
};

export default ImageFire;