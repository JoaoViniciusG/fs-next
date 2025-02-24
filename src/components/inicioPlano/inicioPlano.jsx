import styles from './inicioPlano.module.css';

import * as Icon from 'react-feather';

export default function InicioPlano({
  planName,
  planDescription,
  monthPrice,
  anualPrice,
  oldAnualPrice,
  equivalentMonthPrice,
  dataBaseCapacity,
  usersCapacity,
  planResourcesTitle,
  showAnual = false,
  planResourcesContent = [],
  unlimitedResources = [],
  isMajorPlan = false }) {

  const formatValues = (value) => {
    if (typeof value != "number") return;
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  };

  return (
    <div className={`${styles.container_content_plans} ${(isMajorPlan) && styles.majorPlanColors}`}>
      <div id={styles.plan_period_1} className={styles.container_plan}>
        <div className={styles.plan_header}>
          <div className={styles.div_plan_name}>
            <div style={{ display: "flex", gap: 10 }}>
              <h2 className={styles.plan_name}>{planName}</h2>
              <div className={styles.plan_header_lines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              className={styles.popularTag}
              style={{ display: (isMajorPlan) ? "block" : "none" }}>
              <p>Popular</p>
            </div>
          </div>
          <p className={styles.plan_header_description}>{planDescription}</p>
          <div className={styles.div_plan_header_price}>
            <p
              style={{ display: (showAnual) ? "flex" : "none" }}
              id={styles.text_full_year_price}>
              R${formatValues(oldAnualPrice)}
            </p>
            <p>R$</p>
            <h3 id={styles.plan_period_price}>{formatValues((showAnual) ? anualPrice : monthPrice).split(",")[0]}</h3>
            <div>
              <p
                style={{display: (showAnual) ? "none" : "block"}} 
                id={styles.plan_period_price_cents}>,{formatValues(monthPrice).split(",")[1]}</p>

              <span id={styles.plan_period}>{(showAnual) ? "/ano" : "/mês"}</span>
            </div>
          </div>
          <button className={styles.button_plan_start_now}><a href="#fale_conosco">Comece agora</a></button>
          <p
            style={{ display: (showAnual) ? "flex" : "none" }}
            className={styles.text_equivalent_price}>equivalente a R${formatValues(equivalentMonthPrice)}/mês</p>
        </div>
        <hr className={styles.hr_plans} />
        <div className={styles.plan_unlimited_resources}>
          <div className={styles.div_plan_unlimited_resources}>
            <h3 className={styles.div_plan_unlimited_resources_title}>Recursos ilimitados:</h3>
            <div className={styles.list_unlimited_resources}>
              {
                unlimitedResources.map((item, index) => (
                  <div key={index} className={styles.unlimited_resource}>
                    <div className={styles.container_icons_unlimited}>
                      <Icon.CheckSquare className={styles.icones_unlimited} />
                    </div>
                    <p>{item}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.div_master_plan_user_db}>
            <div className={styles.div_plan_user_db}>
              <Icon.Users className={styles.icones_plan_user} />
              <h4>{JSON.stringify(usersCapacity)} usuários</h4>
            </div>
            <div className={styles.div_plan_user_db}>
              <Icon.Database className={styles.icones_plan_user} />
              <h4>{JSON.stringify(dataBaseCapacity)} MB</h4>
            </div>
          </div>
        </div>
        <hr className={styles.hr_plans} />
        <div className={styles.plan_resources}>
          <h3 className={styles.div_plan_unlimited_resources_title}>{planResourcesTitle}</h3>
          <div className={styles.list_unlimited_resources}>
            {
              planResourcesContent.map((item, index) => (
                <div key={index} className={styles.unlimited_resource}>
                  <div className={styles.container_icons_unlimited}>
                    <Icon.CheckSquare className={styles.icones_unlimited} />
                  </div>
                  <p>{item}</p>
                </div>
              ))
            }
          </div>
          <div className={styles.plan_resources_label_suport}>
            <p> Suporte gratuito e ilimitado, todos os dias, por telefone e e-mail.</p>
          </div>
        </div>
      </div>
    </div>
  );
}