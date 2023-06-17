import React, { useState } from 'react';
import { FormGroup, TextField, Button, Select, Checkbox, Grid, Typography, Divider, FormControl, InputLabel, MenuItem, RadioGroup, FormControlLabel, FormLabel, Radio } from '@mui/material';
import './App.css'

const CadastroForm = () => {

  //const formatedDate = new Date().toISOString().split('T')[0]

  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [site, setSite] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('SL');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [genero, setGenero] = useState('');
  const [celular, setCelular] = useState('');
  const [estCivil, setEstCivil] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const [interesses, setInteresses] = useState({
    esporte: false,
    cultura: false,
    tecnologia: false,
    automoveis: false,
    culinaria: false,
    politica: false,
    policial: false,
    tempo: false,
    economia: false,
    jogos: false,
    educacao: false,
    viagem: false,
    empregos: false,
    modaEstilo: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { nome, CPF, email, site, endereco, bairro, cidade, cep, uf, telefone, dataNasc, genero, celular, estCivil, login, senha, interesses }
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    console.log(data);
  };

  const handleChange = (event) => {
    setInteresses({
      ...interesses,
      [event.target.name]: event.target.checked,
    });
  };

  const { esporte, cultura, tecnologia, automoveis, culinaria, politica, policial, tempo, economia, jogos, educacao, viagem, empregos, modaEstilo } = interesses;

  return (
    <>

      <form onSubmit={handleSubmit} >
        <fieldset className='fieldset'>
          <Typography variant="h5" >Dados Pessoais</Typography>
          <Divider />
          <br />
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Nome completo"
                fullWidth
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="CPF"
                fullWidth
                value={CPF}
                onChange={(event) => setCPF(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="E-mail"
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Web Site"
                fullWidth
                value={site}
                onChange={(event) => setSite(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="date"
                label="Data Nascimento"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={dataNasc}
                onChange={(event) => setDataNasc(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel id="genero" >Sexo</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="genero"
                  name="genero"
                  value={genero}
                  fullWidth
                  onChange={(event) => setGenero(event.target.value)}
                >
                  <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                  <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="estadoCivil">Estado Civil</InputLabel>
                <Select
                  labelId="estadoCivil"
                  id="estadoCivil"
                  value={estCivil}
                  label="Estado Civil"
                  onChange={(event) => setEstCivil(event.target.value)}
                >
                  <MenuItem value="solteiro">Solteiro</MenuItem>
                  <MenuItem value="casado">Casado</MenuItem>
                  <MenuItem value="viuvo">Viúvo</MenuItem>
                  <MenuItem value="divorciado">Divorciado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Login"
                fullWidth
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="password"
                label="Senha"
                fullWidth
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </Grid>
          </Grid>
        </fieldset>
        <fieldset className='fieldset'>
          <Typography variant="h5" >Dados de Contato</Typography>
          <Divider />
          <br />
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Endereço"
                fullWidth
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Bairro"
                fullWidth
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Cidade"
                fullWidth
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="CEP"
                fullWidth
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">UF</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="uf"
                  value={uf}
                  label="uf"
                  onChange={(event) => setUf(event.target.value)}
                >
                  <MenuItem value={'SL'}>Selecione um Estado</MenuItem>
                  <MenuItem value={'AC'}>Acre</MenuItem>
                  <MenuItem value={'AL'}>Alagoas</MenuItem>
                  <MenuItem value={'AP'}>Amapá</MenuItem>
                  <MenuItem value={'AM'}>Amazonas</MenuItem>
                  <MenuItem value={'BA'}>Bahia</MenuItem>
                  <MenuItem value={'CE'}>Ceará</MenuItem>
                  <MenuItem value={'ES'}>Espírito Santo</MenuItem>
                  <MenuItem value={'GO'}>Goiás</MenuItem>
                  <MenuItem value={'MA'}>Maranhão</MenuItem>
                  <MenuItem value={'MT'}>Mato Grosso</MenuItem>
                  <MenuItem value={'MS'}>Mato Grosso do Sul</MenuItem>
                  <MenuItem value={'MG'}>Minas Gerais</MenuItem>
                  <MenuItem value={'PA'}>Pará</MenuItem>
                  <MenuItem value={'PB'}>Paraíba</MenuItem>
                  <MenuItem value={'PR'}>Paraná</MenuItem>
                  <MenuItem value={'PE'}>Pernambuco</MenuItem>
                  <MenuItem value={'PI'}>Piauí</MenuItem>
                  <MenuItem value={'RJ'}>Rio de Janeiro</MenuItem>
                  <MenuItem value={'RN'}>Rio Grande do Norte</MenuItem>
                  <MenuItem value={'RS'}>Rio Grande do Sul</MenuItem>
                  <MenuItem value={'RO'}>Rondônia</MenuItem>
                  <MenuItem value={'RR'}>Roraima</MenuItem>
                  <MenuItem value={'SC'}>Santa Catarina</MenuItem>
                  <MenuItem value={'SP'}>São Paulo</MenuItem>
                  <MenuItem value={'SE'}>Sergipe</MenuItem>
                  <MenuItem value={'TO'}>Tocantins</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Telefone"
                fullWidth
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Celular"
                fullWidth
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
                required
              />
            </Grid>
          </Grid>
        </fieldset>
        <fieldset className='fieldset'>
          <Typography variant="h5" >Áreas de Interesse</Typography>
          <Divider />
          <Grid container spacing={2} item xs={12}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={esporte} onChange={handleChange} name="esporte" />
                  }
                  label="Esporte"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={cultura} onChange={handleChange} name="cultura" />
                  }
                  label="Cultura"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={tecnologia} onChange={handleChange} name="tecnologia" />
                  }
                  label="Tecnologia"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={automoveis} onChange={handleChange} name="automoveis" />
                  }
                  label="Automóveis"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={culinaria} onChange={handleChange} name="culinaria" />
                  }
                  label="Culinária"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={politica} onChange={handleChange} name="politica" />
                  }
                  label="Política"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={policial} onChange={handleChange} name="policial" />
                  }
                  label="Policial"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={tempo} onChange={handleChange} name="tempo" />
                  }
                  label="Tempo"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={economia} onChange={handleChange} name="economia" />
                  }
                  label="Econômia"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={jogos} onChange={handleChange} name="jogos" />
                  }
                  label="Jogos"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={educacao} onChange={handleChange} name="educacao" />
                  }
                  label="Educação"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={viagem} onChange={handleChange} name="viagem" />
                  }
                  label="Viagem"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={empregos} onChange={handleChange} name="empregos" />
                  }
                  label="Empregos"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={modaEstilo} onChange={handleChange} name="modaEstilo" />
                  }
                  label="Moda e Estilo"
                />
              </FormGroup>
            </FormControl>
          </Grid>

        </fieldset>
        <fieldset className='fieldset'>
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" type="submit" className='button'>
                Cadastrar
              </Button>
            </Grid>
            <Grid item xs={0.1} />
            <Grid item xs={2}>
              <Button variant="contained" color="primary" onclick="window.history.back()" className='button'>
                Retornar
              </Button>
            </Grid>
          </Grid>
        </fieldset>
      </form>
    </>
  );
};

export default CadastroForm;
