import styles from "./pedidos.module.css";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";

const TotalSummary = ({
  subtotal,
  desconto,
  total,
  observacao,
  setSubtotal,
  setDesconto,
  setTotal,
  setObservacao,
  readOnly = false, 
}) => {
  return (
    <BorderContainer>
      <div className={styles.divContentInputTotal}>
        <div className={styles.linha}>
          <InputLabel
            label="Subtotal"
            value={Number(subtotal).toFixed(2)}
            setValue={!readOnly ? setSubtotal : undefined}
            className={styles.inputDadosPessoais}
            readonly={true}
            width="90%"
          />

      <InputLabel
        label="Desconto "
        value={desconto.toString()}
        setValue={
          !readOnly
            ? (val) => {

                const onlyNumbers = val.replace(/\D/g, '');
                let valorNum = parseInt(onlyNumbers || '0', 10);
                if (valorNum > 100) {
                  valorNum = 100;
                }

                setDesconto(valorNum.toString());
              }
            : undefined
        }
        className={styles.inputDadosPessoais}
        readonly={readOnly}
        width="90%"
      />



          <InputLabel
            label="Total"
            value={Number(total).toFixed(2)}
            setValue={!readOnly ? setTotal : undefined}
            className={styles.inputDadosPessoais}
            readonly={true}
            width="90%"
          />
        </div>

        <TextAreaInput
          label="Observação:"
          placeholder="Escreva sua descrição..."
          id="input-total"
          value={observacao}
          setValue={!readOnly ? setObservacao : undefined}
          readonly={readOnly}
        />
      </div>
    </BorderContainer>
  );
};

export default TotalSummary;
