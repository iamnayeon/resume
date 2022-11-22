import * as S from "./Table.style";
import * as GeneralS from "../../style/general.style";

interface ITableRow {
  headCell: string;
  dataCell: string;
}
interface TableProp {
  rows: ITableRow[];
}
const Table = ({ rows }: TableProp) => {
  return (
    <S.Table>
      <tbody>
        {rows.map(({ headCell, dataCell }, i) => (
          <S.TR key={i}>
            <S.TH>
              <GeneralS.lightP style={{ whiteSpace: "nowrap" }}>{headCell}</GeneralS.lightP>
            </S.TH>
            <S.TD>
              <GeneralS.P>{dataCell}</GeneralS.P>
            </S.TD>
          </S.TR>
        ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
