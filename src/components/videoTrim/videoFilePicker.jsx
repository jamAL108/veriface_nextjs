function VideoFilePicker({ showVideo, handleChange, children }) {

const FileInput = () => (
  <label
    htmlFor="x"
    id={`${showVideo ? "file_picker_small" : ""}`}
    className={`file_picker `}
  >
    <span style={{opacity:0.3}}>choose file</span>
    <input onChange={handleChange} type="file" id="x" accept="video/mp4" />
  </label>
);


return showVideo ? (
  <>
    {" "}
    {children} 
  </>
  ) : null
}

export default VideoFilePicker;
