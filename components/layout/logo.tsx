import * as React from 'react';
import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react';
import { Link } from '@saas-ui/react';
import Image from 'next/image';
import siteConfig from 'data/config';

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  
    
 let logo = (
    <Box height="40px" mt="-4px" overflow={'hidden'}>
      <Image src={'/logo/500x150-3.png'} alt='ArchetJS' width={150} height={50} />
    </Box>
  );


  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link href={href} display="flex" p="1" borderRadius="sm" onClick={onClick}>
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
