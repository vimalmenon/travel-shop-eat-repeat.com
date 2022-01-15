import { useFooterHelper } from '@store';

export const Footer: React.FC = () => {
  const { versionNumber } = useFooterHelper();
  return (
    <footer className="flex text-sm py-1 px-2 justify-between h-12 items-center">
      <span></span>
      <span>{versionNumber}</span>
    </footer>
  );
};
