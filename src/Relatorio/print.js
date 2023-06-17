import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

function printPDF(props) {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Formulário de Cadastro',
            fontSize: 15,
            bold: true,
            margin: [30, 30, 10, 20],
            alignment: "center"
        }
    ];
    const details = [
        {
            text: 'DADOS PESSOAIS',
            fontSize: 12,
            bold: true,
            absolutePosition: { x: 100, y: 80 },
        },
        {
            text: 'Nome:',
            bold: true,
            absolutePosition: { x: 100, y: 100 }
        },
        {
            text: props.nome,
            absolutePosition: { x: 140, y: 100 }
        },
        {
            text: 'CPF:',
            bold: true,
            absolutePosition: { x: 100, y: 120 }
        },
        {
            text: props.CPF,
            absolutePosition: { x: 130, y: 120 }
        },
        {
            text: 'E-mail:',
            bold: true,
            absolutePosition: { x: 100, y: 140 }
        },
        {
            text: props.email,
            absolutePosition: { x: 145, y: 140 }
        },
        {
            text: 'Web Site:',
            bold: true,
            absolutePosition: { x: 100, y: 160 }
        },
        {
            text: `http://${props.site}`,
            absolutePosition: { x: 155, y: 160 }
        },
        {
            text: 'Data Nascimento:',
            bold: true,
            absolutePosition: { x: 100, y: 180 }
        },
        {
            text: props.formatedDate,
            absolutePosition: { x: 200, y: 180 }
        },
        {
            text: 'Sexo:',
            bold: true,
            absolutePosition: { x: 300, y: 180 }
        },
        {
            text: props.genero,
            absolutePosition: { x: 335, y: 180 }
        },
        {
            text: 'Estado Civil:',
            bold: true,
            absolutePosition: { x: 100, y: 200 }
        },
        {
            text: props.estCivil,
            absolutePosition: { x: 170, y: 200 }
        },
        {
            text: 'Login:',
            bold: true,
            absolutePosition: { x: 100, y: 220 }
        },
        {
            text: props.login,
            absolutePosition: { x: 140, y: 220 }
        },
        {
            text: 'DADOS DE CONTATO',
            fontSize: 12,
            bold: true,
            absolutePosition: { x: 100, y: 250 },
        },
        {
            text: 'Endereço:',
            bold: true,
            absolutePosition: { x: 100, y: 270 }
        },
        {
            text: props.endereco,
            absolutePosition: { x: 160, y: 270 }
        },
        {
            text: 'Bairro:',
            bold: true,
            absolutePosition: { x: 100, y: 290 }
        },
        {
            text: props.bairro,
            absolutePosition: { x: 140, y: 290 }
        },
        {
            text: 'Cidade/UF:',
            bold: true,
            absolutePosition: { x: 280, y: 290 }
        },
        {
            text: props.cidade + ' - ' + props.uf,
            absolutePosition: { x: 345, y: 290 }
        },
        {
            text: 'CEP:',
            bold: true,
            absolutePosition: { x: 100, y: 310 }
        },
        {
            text: props.cep,
            absolutePosition: { x: 130, y: 310 }
        },
        {
            text: 'Telefone:',
            bold: true,
            absolutePosition: { x: 100, y: 330 }
        },
        {
            text: props.telefone,
            absolutePosition: { x: 160, y: 330 }
        },
        {
            text: 'Celular:',
            bold: true,
            absolutePosition: { x: 280, y: 330 }
        },
        {
            text: props.celular,
            absolutePosition: { x: 330, y: 330 }
        },
        {
            text: 'AREAS DE INTERESSE',
            fontSize: 12,
            bold: true,
            absolutePosition: { x: 100, y: 360 },
        },
        {
            text: props.interessesChecked,
            margin: [85, 330]
        },
    ];
    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + '/' + pageCount,
                fontSize: 9,
                margin: [0, 10, 20, 0],
                alignment: "right"
            }
        ]
    }
    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Rodape
    }
    pdfMake.createPdf(docDefinitions).open();
}


export default printPDF