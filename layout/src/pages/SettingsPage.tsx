import { SettingsMainContent } from 'components/SettingsMainContent/SettingsMainContent';
import { SettingsProfiles } from 'components/SettingsProfiles/SettingsProfiles';

export const SettingsPage = () => {
  return (
    <section className="settings">
      <SettingsMainContent />
      <SettingsProfiles />
    </section>
  );
};
