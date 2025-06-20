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
}) => {
  return (
    <BorderContainer>
      <div className={styles.divContentInputTotal}>
        <div className={styles.linha}>
          <InputLabel
            label="Subtotal"
            value={Number(subtotal).toFixed(2)}
            setValue={setSubtotal}
            className={styles.inputDadosPessoais}
            readonly={true}
            width="90%"
          />

          <InputLabel
            label="Desconto"
            value={desconto}
            setValue={(val) => {
              if (/^\d*\.?\d*$/.test(val)) {
                const valorNum = parseFloat(val) || 0;
                const subtotalNum = parseFloat(subtotal) || 0;

                if (valorNum <= subtotalNum) {
                  setDesconto(val);
                }
              }
            }}
            className={styles.inputDadosPessoais}
            readonly={false}
            width="90%"
          />

          <InputLabel
            label="Total"
            value={Number(total).toFixed(2)}
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
          value={observacao}
          setValue={setObservacao}
        />
      </div>
    </BorderContainer>
  );
};

export default TotalSummary;
