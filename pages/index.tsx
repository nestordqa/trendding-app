import {NextPage} from 'next';
import Layout from '@components/components/layout/Layout';
import { useT } from '@components/components/ContextProvider/LanguagesProvider';

const Home : NextPage = ()=>{

  const t = useT();

  return (
    <>
      <Layout title={t.home.home_page} content={t.home.home_page}>
        <h1>Desde {t.home.home}</h1>
      </Layout>
    </>
  );
};

export default Home;
