import PropTypes from "prop-types";

function Lists({marca, lancamento}){
    return (
      <>
          <li>{marca} - {lancamento}</li>
      </>
    );
}

Lists.propTypes = {
  marca: PropTypes.string,
  lancamento: PropTypes.number
};

Lists.defaultProps = {
  marca: "Marca não encontrada",
  lancamento: 123
}

export default Lists;