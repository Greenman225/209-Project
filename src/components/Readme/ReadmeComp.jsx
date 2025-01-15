import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./dedsec.jpg";
import Footer from "./Footer";

const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleOpen = () => {
    setHasSeenReadme(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
      {!hasSeenReadme && (
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          open={open}
          PaperProps={{
            sx: {
              borderRadius: "1rem",
              maxHeight: "70vh",
            },
          }}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center h-16">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline text-base md:text-lg">
                  <a href="https://github.com/Greenman225">
                    Project Readme
                  </a>
                </span>
              </Typography>

              <IconButton>
                <a
                  href="https://github.com/Greenman225"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar
                    alt="Greenman225"
                    src={profilePic}
                    sx={{
                      width: isMobile ? "60px" : "70px",
                      height: isMobile ? "60px" : "70px", // Ensure height and width are the same
                      borderRadius: "50%", // Ensure the image is circular
                      border: "2px solid #3B82F6",
                    }}
                  />
                </a>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.25rem" }}
              >
                ⚡ We are a dedicated team of Full Stack Developers.
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                This E-Commerce application is developed collaboratively using React, Vite, Tailwind CSS, Firebase, React Router, and Context API. Our project is designed for a competitive market, ensuring top-tier performance and user experience.
              </Typography>
              <Divider />
              <Typography
                paragraph
                className="text-gray-800 "
                style={{
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  marginTop: "1rem",
                  fontWeight: "bold",
                }}
              >
                Key Features:
              </Typography>
              <ul className="flex flex-col gap-2 ml-3 md:ml-6 mb-4 text-sm md:text-base text-gray-800 list-none">
                <li>
                  ✅ Seamless multi-language support (English and Arabic).
                </li>
                <li>
                  ✅ Efficient product search functionality for enhanced user experience.
                </li>
                <li>
                  ✅ Secure authentication and user management powered by Firebase.
                </li>
                <li>
                  ✅ Streamlined shopping experience with Cart and Wishlist functionalities.
                </li>
                <li>
                  ✅ Impeccably responsive design catering to diverse devices and screens.
                </li>
              </ul>
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}

      <IconButton
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300"
        onClick={handleOpen}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <BsExclamation className="hover:bg-red-500 rounded-full w-6 h-auto md:w-8 md:h-8" />
      </IconButton>
    </>
  );
};

export default ReadmeComponent;