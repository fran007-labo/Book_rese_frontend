export default function ImagePreview(props){
  return (
    <div className="p-media__thumb" onClick={() => props.delete(props.index)} >
      <img alt="アイキャッチ画像" src={URL.createObjectURL(props.image)} />
    </div>
  );
};