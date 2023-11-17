import "./copyfooter.scss";

const CopyFooter = () => {
  return (
    <div class="container col-mb-12 sv-flex-row-center">
      <img src="/library/new_layout_assets/Icons/plus_18.svg" />
      <span class="sv-text-regular sv-text-14 sv-text-white-500">
        Joga com moderação. Se tiveres problemas com o jogo ou conheças alguém
        nessa situação, contacta a
        <a
          href="http://www.sicad.pt/pt/Paginas/default.aspx"
          class=" sv-text-subtitle sv-link-green-300"
          target="_blank"
        >
          <u>Linha Vida</u>
        </a>
        .
      </span>
    </div>
  );
};

export default CopyFooter;
