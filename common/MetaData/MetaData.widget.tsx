import Head from 'next/head';

import { IMetaData } from './MetaData';

export const MetaData: React.FC<IMetaData> = ({ metaData }) => {
  const title = metaData?.titles.join(metaData.titleSeparator);
  const description = metaData?.description || '';
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
  );
};
