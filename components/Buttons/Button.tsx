import React, { MouseEventHandler, useState } from 'react'
import { ButtonFlexWrapper, ButtonsWrapper } from './Button.styles';

interface ButtonsProps {
  code: string;
  downloadName: string;
}

const CopyIcon = () => {
  return <svg stroke="#fff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
}

const DownloadIcon = () => {
  return <svg stroke="#fff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
}

const CheckmarkIcon = () => {
  return <svg stroke="#fff" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" stroke-width="2" points="2 14 9 20 22 4"></polyline></svg>
}

export const Buttons = ({ code, downloadName }: ButtonsProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleDownload = (): void => {

    const element = document.createElement("a");
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = downloadName;
    document.body.appendChild(element);
    element.click();

    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 2000);
  };

  return (
    <ButtonsWrapper>
      <ButtonFlexWrapper onClick={handleCopy}>
        {isCopied ? <CheckmarkIcon /> : <CopyIcon/> }
        <span>Skopiuj</span>
      </ButtonFlexWrapper>
      <ButtonFlexWrapper onClick={handleDownload}>
        {isDownloaded ? <CheckmarkIcon /> : <DownloadIcon/> }
        <span>Pobierz</span>
      </ButtonFlexWrapper>
    </ButtonsWrapper>
  )
}
