import 'utils/localization/i18n';

import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return <div>{t('template')}</div>;
};

export default App;
