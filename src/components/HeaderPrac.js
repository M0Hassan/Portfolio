import React, { useRef, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ];


const HeaderPrac = () => {
    const headerRef = useRef(null);

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    }

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) return;
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0px)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <Box
        ref={headerRef}
        position="fixed"
        color="white"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        >
            <nav>
                <HStack
                  py={8}
                  px={8}
                  justifyContent="space-between"
                  alignItems="center"
                >
                    <HStack spacing={8}>
                        {socials.map((social) => {
                            return <a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
                        })}
                    </HStack>
                    <HStack spacing={8}>
                        <a href="#contactme" onClick={handleClick("contactme")}>Contact Me</a>
                        <a href="#projects" onClick={handleClick("projects")}>Projects</a>
                    </HStack>
                </HStack>
            </nav>
        </Box>
    )
}

export default HeaderPrac;

