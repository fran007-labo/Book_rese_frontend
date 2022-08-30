export const ImagePreview = (props) => {
  return (
    <div className="p-media__thumb" onClick={() => props.delete(props.id)}>
      <img alt="アイキャッチ画像" src={props.path} />
    </div>
  );
};