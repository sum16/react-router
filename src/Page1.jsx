import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      {/* リンクを作成 */}
      {/* to=""に任意のパス名を記述 */}
      <Link to="page1/detailA">詳細Aに遷移</Link>
      <br />
      <Link to="page2/detailB">詳細Bに遷移</Link>
    </div>
  );
};
