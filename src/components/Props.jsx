import PropTypes from "prop-types";

function Props({marca, lancamento}){
    return (
      <>
          <li>{marca} - {lancamento}</li>
      </>
    );
}

Props.propTypes = {
  marca: PropTypes.string,
  lancamento: PropTypes.number
};

Props.defaultProps = {
  marca: "Marca não encontrada",
  lancamento: 123
}

export default Props;