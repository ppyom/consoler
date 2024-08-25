import { Navigate, useParams } from 'react-router-dom';
import { createConsole, getConsole } from '../../storages/consoleStorage.ts';
import { ConsoleProvider } from '../../context/consoleContext.tsx';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import InformationForm from './InformationForm/InformationForm.tsx';
import Viewer from './Viewer/Viewer.tsx';
import Editor from './Editor/Editor.tsx';
import Result from './Result/Result.tsx';
import styles from './EditPage.module.css';

const EditPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={`/edit/${createConsole()}`} replace={true} />;
  }
  if (!getConsole(id)) {
    return <Navigate to="/404" replace={true} />;
  }

  return (
    <ConsoleProvider id={id!}>
      <PageLayout className={styles.edit}>
        <InformationForm />
        <div className={styles.editor}>
          <Viewer />
          <Editor />
        </div>
        <Result />
      </PageLayout>
    </ConsoleProvider>
  );
};

export default EditPage;
