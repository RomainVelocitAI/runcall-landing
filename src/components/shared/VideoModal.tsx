'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from '@/components/ui/Modal';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title = 'Vidéo' }: VideoModalProps) => {
  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-4xl">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>
            Découvrez comment Runcall peut transformer votre business
          </ModalDescription>
        </ModalHeader>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;