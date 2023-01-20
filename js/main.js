const form = document.querySelector('#form-habits')

const nlwSetup = new NWLSetup(form)

const data = {
    run: ['01-01', '01-02', '01-06'],
}

nlwSetup.setData(data)

nlwSetup.load()