export default function ImageUploader({ setSelectedImage, setPreviewUrl }) {
  const fileSelectHandler = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setSelectedImage(file);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form>
      <input
        type="file"
        accept="image/*"
        onChange={fileSelectHandler}
        capture="camera"
      />
    </form>
  );
}
