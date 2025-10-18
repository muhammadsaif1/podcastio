import CreatePodcastForm from "@/components/Forms/CreatePodcastForm";

const CreatePodcast = () => {
  return (
    <>
      <div className="main-content-area p-lg-6 p-4 rounded bgc-2 border bc-n400">
        <div className="create-podcast-area p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
          <h4 className="fw-semibold">Create Podcast</h4>
          <span className="d-block my-lg-6 my-4 border-dashed"></span>
          <CreatePodcastForm />
        </div>
      </div>
    </>
  );
};

export default CreatePodcast;
