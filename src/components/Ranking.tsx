import styled from "styled-components";
import List from "components/List";

const Lists = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 80px auto 0 ;
`;

const Ranking = ()=> {
  return (
    <>
      <Lists>
        <List />
      </Lists>
    </>
  )
}

export default Ranking;