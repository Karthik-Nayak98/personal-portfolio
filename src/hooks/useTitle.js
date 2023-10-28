import { Helmet } from 'react-helmet';

const useTitle = (title, description = '') => {
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
  </Helmet>;
};

export default useTitle;
