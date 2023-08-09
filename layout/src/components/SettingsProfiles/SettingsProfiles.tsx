import { CommonBlockHeader } from 'components/CommonBlockHeader/CommonBlockHeader';
import { ReactComponent as SettingsIcon } from 'assets/hero_settings.svg';

export const SettingsProfiles = () => {
  return (
    <div>
      <CommonBlockHeader title="Profiles" isFirst />
      <ul className="settings__profiles__list">
        {Array.of('Default profile', 'Local', 'MongoDB', 'Proxy', 'Edge').map(
          (item, ind) => {
            return (
              <li key={Date.now() + ind}>
                <SettingsIcon className="settings__profiles__svg" /> {item}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
