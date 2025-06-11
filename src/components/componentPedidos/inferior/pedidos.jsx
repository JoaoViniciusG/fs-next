import styles from "./pedidos.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";

const TotalSummary = ({ subtotal, desconto, total, setSubtotal, setDesconto, setTotal }) => {
  return (
    <BorderContainer>
      <div className={styles.divContentInputTotal}>
        <div className={styles.linha}>
          <InputLabel 
            label="Subtotal" 
            value={subtotal} 
            setValue={setSubtotal} 
            className={styles.inputDadosPessoais} 
            readonly={true} 
            width="90%"
          />
          <InputLabel 
            label="Desconto" 
            value={desconto} 
            setValue={setDesconto} 
            className={styles.inputDadosPessoais} 
            readonly={false}  // ← aqui o campo será editável
            width="90%"
          />
          <InputLabel 
            label="Total" 
            value={total} 
            setValue={setTotal} 
            className={styles.inputDadosPessoais} 
            readonly={true} 
            width="90%"
          />
        </div>

        <TextAreaInput 
          label="Observação:" 
          placeholder="Escreva sua descrição..." 
          id="input-total" 
        />
      </div>
    </BorderContainer>
  );
};

export default TotalSummary;
