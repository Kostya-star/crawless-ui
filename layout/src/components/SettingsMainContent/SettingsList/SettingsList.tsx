import { ReactNode } from 'react';
import styles from './SettingsList.module.scss';

interface SettingItem {
  title: string;
  description: string | boolean;
}

interface SettingsListProps {
  settings?: SettingItem[];
  children?: ReactNode;
  isLast?: boolean
}

export const SettingsList = ({ settings, isLast, children }: SettingsListProps) => {
  return (
    <ul className={`${styles.settings_list} ${isLast ? styles.settings_list_last : ''}`}>
      {settings?.map((setting, ind) => {
        const isBoolean = typeof setting.description === 'boolean';
        return (
          <li key={Date.now() + ind}>
            <span>{setting.title}</span>
            <span
              className={`${
                isBoolean
                  ? setting.description
                    ? styles.description_bool
                    : styles.description_bool_false
                  : ''
              }`}
            >
              {isBoolean ? String(setting.description) : setting.description}
            </span>
          </li>
        );
      })}
      {children || null}
    </ul>
  );
};
