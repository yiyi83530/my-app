import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // 要測英文就改成 'en'
  const locale = 'zh-TW';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
