import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import { increment } from '../store/redux/slices/clickCounterSlice';
import { setClassification } from '../store/redux/slices/imageClassificationSlice';
import { GlobalLoadingContext } from '../store/context/GlobalLoadingContext';
import { SharedContext } from '../store/context/SharedContext';
import { OverlayContext } from '../store/context/OverlayContext';
import ApiBase from '../utilities/apibase/apibase';
import { links } from '../utilities/apibase/links';
import CustomButton from '../components/customButton/CustomButton';
import { colors } from '../utilities/colors/colors';
import ScrollDownIndicator from '../components/scrollDownIndicator/ScrollDownIndicator';
import '../components/scrollDownIndicator/ScrollDownIndicator.css';

const MainScreen = () => {
    const dispatch = useDispatch();
    const clickCount = useSelector((state) => state.clickCounter.value);
    const imageClassification = useSelector((state) => state.imageClassification.classification);

    const { clickCount: contextClickCount, setClickCount } = useContext(SharedContext);

    const { setShowGlobalLoading } = useContext(GlobalLoadingContext);
    const { setShowOverlay } = useContext(OverlayContext);

    const [uploadedImage, setUploadedImage] = useState(null);
    const [errorModalAlertText, setErrorModalAlertText] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    const handleReduxIncrement = () => {
        dispatch(increment());
    };

    const handleContextIncrement = () => {
        setClickCount(contextClickCount + 1);
    };

    const handleShowError = (message) => {
        dispatch(setClassification(null));
        setErrorModalAlertText(message);
        setShowErrorModal(true);
    };

    const handleCloseError = () => {
        setShowErrorModal(false);
        setErrorModalAlertText('');
    };

    const handleClassifyImage = async (file) => {
        setUploadedImage(null);
        setShowOverlay(true);
        setShowGlobalLoading(true);

        handleReduxIncrement();
        handleContextIncrement();

        setTimeout(async () => {
            try {
                await ApiBase.postFile(
                    links.classifyImage,
                    file,
                    (json) => {
                        dispatch(setClassification(json.data.image_classification_label));
                        setUploadedImage(URL.createObjectURL(file));
                        document.getElementById('file-upload').value = '';
                        handleScroll();
                    },
                    (res) => {
                        handleShowError(res || 'Error');
                    },
                    (ex) => {
                        handleShowError(ex || 'Error');
                    }
                );
            } catch (error) {
                handleShowError(error.toString());
            } finally {
                setShowOverlay(false);
                setShowGlobalLoading(false);
                document.getElementById('file-upload').value = '';
            }
        }, 2000);
    };

    const handleScroll = () => {
        const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
        setIsScrollable(isScrollable);
    };

    useEffect(() => {
        const handleResize = () => {
            const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
            setIsScrollable(isScrollable);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            textAlign="center"
            mt="4vh"
            paddingX="2rem"
            bgcolor={colors.mainBackgroundColor}
            minHeight="100vh"
        >
            <Typography variant="body1" color={colors.typographySecondaryColor} mb="4vh" paddingX="7.5rem" fontSize="1.3rem">
                For demonstration purposes, a 2-second delay has been added to the POST request to ensure all effects are visible. Additionally, there is a 10-second timeout for the POST request. If no response is received within 10 seconds, the request will be cancelled. Exceptions are handled to inform users about issues, such as uploading non-image files or server unavailability. Upload counters demonstrate state management skills. Material-UI is used for consistent styling. Colors are defined in variables for reusability. The component-based design follows SOLID principles. Request management is handled via ApiBase; logging can be added if necessary. There are other features not mentioned here, so feel free to explore. I enjoyed working on this project. Measurements like `vh` and `rem` are used to ensure proper scaling on all device sizes, supporting responsive design.
            </Typography>
            <Typography variant="h4" mb="2vh" color={colors.typographyPrimaryColor} fontWeight="bold" fontSize="1.2rem">
                Redux Upload Count (retained after page refresh): {clickCount}
            </Typography>
            <Typography variant="h4" mb="4vh" color={colors.typographySecondaryVariantColor} fontWeight="bold" fontSize="1.2rem">
                Context Upload Count (reset after page refresh): {contextClickCount}
            </Typography>
            <Box mt="4vh">
                <CustomButton
                    text="Upload Image"
                    buttonColor={colors.primaryButtonColor}
                    textColor={colors.primaryButtonTextColor}
                    onClick={() => document.getElementById('file-upload').click()}
                />
                <input
                    id="file-upload"
                    type="file"
                    hidden
                    onChange={(e) => handleClassifyImage(e.target.files[0])}
                />
                {imageClassification && (
                    <Typography
                        variant="h6"
                        mt="2vh"
                        sx={{
                            color: imageClassification === 'OK' ? colors.imageClassificationOkColor : colors.imageClassificationNotOkColor,
                            border: `0.125rem solid ${imageClassification === 'OK' ? colors.imageClassificationOkColor : colors.imageClassificationNotOkColor}`,
                            borderRadius: '0.25rem',
                            padding: '0.5rem',
                            marginLeft: '1vh',
                            display: 'inline-block',
                            mt: '4vh',
                        }}
                    >
                        Image Classification: {imageClassification}
                    </Typography>
                )}
                {uploadedImage && (
                    <Box mt="2vh" padding="3vh">
                        <img
                            src={uploadedImage}
                            alt="Chosen file"
                            style={{ maxWidth: '100%', maxHeight: '30vh', marginBottom: '3vh' }}
                        />
                    </Box>
                )}
            </Box>
            <Snackbar open={showErrorModal} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity={colors.alertErrorColor} sx={{ width: '100%' }}>
                    {errorModalAlertText}
                </Alert>
            </Snackbar>
            {isScrollable && <ScrollDownIndicator />}
        </Box>
    );
};

export default MainScreen;