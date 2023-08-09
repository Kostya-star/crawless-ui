import { CommonBlockHeader } from 'components/CommonBlockHeader/CommonBlockHeader';
import { SettingsList } from 'components/SettingsMainContent/SettingsList/SettingsList';
import React from 'react';

const generalSettings = [
  {
    title: 'pageTimeout',
    description: '35s',
  },
  {
    title: 'dialogTimeout',
    description: '15m',
  },
  {
    title: 'timeout',
    description: '12h 30m',
  },
];

const queueSettings = [
  {
    title: 'id',
    description: '5e2e7d6d11e2e62b62797fe7',
  },
  {
    title: 'priority',
    description: '50',
  },
  {
    title: 'unique',
    description: true,
  },
];

const browserSettings = [
  {
    title: 'width',
    description: '--',
  },
  {
    title: 'height',
    description: '--',
  },
  {
    title: 'visible',
    description: false,
  },
  {
    title: 'devtools',
    description: true,
  },
  {
    title: 'closePages',
    description: true,
  },
  {
    title: 'closePagesWithFail',
    description: true,
  },
];

const speedBoostSettings = [
  {
    title: 'loadOnlyMainUrl',
    description: false,
  },
  {
    title: 'loadJavascript',
    description: true,
  },
  {
    title: 'loadXHR',
    description: true,
  },
  {
    title: 'loadFrames',
    description: true,
  },
  {
    title: 'loadImages',
    description: false,
  },
  {
    title: 'loadCss',
    description: true,
  },
  {
    title: 'loadMedia',
    description: false,
  },
  {
    title: 'loadFonts',
    description: true,
  },
  {
    title: 'loadAds',
    description: false,
  },
];

const proxySettings = [
  {
    title: 'proxy',
    description: '--',
  },
];

const getSettingsJson = () => {
  return (
    <p>
      {`{"_id": `}
      <span className="settings__proxy_green">"5e2e7d6d11e2e62b62797fe7"</span>
      {` "companyName": `}
      <span className="settings__proxy_green">"Kay Dental Group"</span>
      {`, "website":`}
      <span className="settings__proxy_red">NULL</span>
      {`}`}
    </p>
  );
};

const authSettings = [
  {
    title: 'maxAuthRetries',
    description: '50',
  },
];

const navSettings = [
  {
    title: 'randomUserAgent',
    description: '35s',
  },
  {
    title: 'userAgent',
    description: '35s',
  },
  {
    title: 'method',
    description: '35s',
  },
  {
    title: 'referrer',
    description: '35s',
  },
  {
    title: 'cookies',
    description: '35s',
  },
  {
    title: 'headers ',
    description: '35s',
  },
  {
    title: 'postData',
    description: '35s',
  },
];

export const SettingsMainContent = () => {
  return (
    <div>
      <CommonBlockHeader title="General" isFirst />
      <SettingsList settings={generalSettings} />
      <CommonBlockHeader title="Queue" />
      <SettingsList settings={queueSettings} />
      <CommonBlockHeader title="Browser" />
      <SettingsList settings={browserSettings} />
      <CommonBlockHeader title="Speed Boost" />
      <SettingsList settings={speedBoostSettings} />
      <CommonBlockHeader title="Proxy" />
      <SettingsList settings={proxySettings}>
        <li>
          <span>proxies</span>
          {getSettingsJson()}
        </li>
      </SettingsList>
      <CommonBlockHeader title="Scheduler" />
      <SettingsList>
        <li>
          <span>schedule</span>
          {getSettingsJson()}
        </li>
      </SettingsList>
      <CommonBlockHeader title="Authentication" />
      <SettingsList settings={authSettings} />
      <CommonBlockHeader title="Navigation" />
      <SettingsList settings={navSettings} isLast/>
    </div>
  );
};
