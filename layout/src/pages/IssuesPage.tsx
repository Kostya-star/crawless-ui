import { IssuesForm } from 'components/IssuesForm/IssuesForm';
import { IssuesList } from 'components/IssuesList/IssuesList';

export const IssuesPage = () => {
  return (
    <section className="issues">
      <IssuesList />
      <IssuesForm />
    </section>
  );
};
