import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import InformationForm from './InformationForm/InformationForm.tsx';
import Viewer from './Viewer/Viewer.tsx';
import Editor from './Editor/Editor.tsx';
import Result from './Result/Result.tsx';
import styles from './EditPage.module.css';

const EditPage = () => {
  return (
    <PageLayout className={styles.edit}>
      <InformationForm />
      <div className={styles.editor}>
        <Viewer />
        <Editor />
      </div>
      <Result />
    </PageLayout>
  );
};

export default EditPage;
