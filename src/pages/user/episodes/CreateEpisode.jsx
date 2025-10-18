import CreateEpisodeForm from "@/components/Forms/CreateEpisodeForm";

const CreateEpisode = () => {
  return (
    <>
      <div className="main-content-area p-lg-6 p-4 rounded bgc-2 border bc-n400">
        <div className="create-episode-area p-lg-6 p-4 rounded-3 border bc-n500 bgc-4">
          <h4 className="fw-semibold">New Episode</h4>
          <span className="d-block my-lg-6 my-4 border-dashed"></span>
          <CreateEpisodeForm />
        </div>
      </div>
    </>
  );
};

export default CreateEpisode;
