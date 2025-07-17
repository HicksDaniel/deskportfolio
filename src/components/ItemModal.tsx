import { useEffect } from 'react';
import { allItems, type DeskItem } from '../libs/deskItems';


/**
 * ItemModal - A reusable modal component for displaying desk items
 *
 * Features:
 * - Automatically renders content based on item type (device, image, sticky)
 * - ESC key support to close modal
 * - Prevents body scroll when open
 * - Customizable overlay and content styles
 * - Optional click-outside-to-close behavior
 */

interface ItemModalProps {
  selectedPopupItem: DeskItem | null;
  onClose: () => void;
  /** Custom styles for the modal overlay */
  overlayStyle?: React.CSSProperties;
  /** Custom styles for the modal content */
  contentStyle?: React.CSSProperties;
  /** Whether to close modal when clicking outside */
  closeOnOverlayClick?: boolean;
}

export default function ItemModal({
  selectedPopupItem,
  onClose,
  overlayStyle = {},
  contentStyle = {},
  closeOnOverlayClick = true
}: ItemModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (selectedPopupItem) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPopupItem, onClose]);

  if (!selectedPopupItem) return null;

  const item = allItems.find(item => item.id === selectedPopupItem.id);
  if (!item) return null;

  const renderModalContent = () => {
    if (item.type === 'device' && item.component) {
      const maxWidth = item.id === 'mockPhone' ? '350px' : '1200px';
      const Component = item.component;
      return (
        <div style={{ width: maxWidth }} className="modal-child-wrapper">
          <Component
            {...item.componentProps}
            deskActive={true}
            isActive={true}
          />
        </div>
      );
    }

    if (item.type === 'image' || item.type === 'sticky') {
      const maxWidth = item.type === 'image' ? '700px' : '500px';
      return (
        <img
          src={item.src}
          alt={`${item.type} ${item.id}`}
          style={{ maxWidth }}
        />
      );
    }

    return null;
  };

  return (
    <div
      className="modal-overlay"
      onClick={closeOnOverlayClick ? onClose : undefined}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        ...overlayStyle
      }}
    >
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'auto',
          backgroundColor: 'rgba(100, 100, 100, 0.8)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          ...contentStyle
        }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#666',
            zIndex: 1,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          ×
        </button>
        {renderModalContent()}
      </div>
    </div>
  );
}
