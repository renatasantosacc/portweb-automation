
const elements = {
    enderecoEntregaBox: '#address_delivery',
    enderecoCobrancaBox: '#address_invoice',

    nomeCompleto: 'li.address_firstname.address_lastname',
    empresa: 'li.address_address1.address_address2',
    cidadeEstadoCep: 'li.address_city.address_state_name.address_postcode',
    pais: 'li.address_country_name',
    telefone: 'li.address_phone',
}

class metodos {
    validarEnderecosCheckout(esperado) {
        this.validarEndereco(elements.enderecoEntregaBox, esperado)
        this.validarEndereco(elements.enderecoCobrancaBox, esperado)
      }
    
      validarEndereco(boxSelector, esperado) {
        cy.get(boxSelector).should('be.visible').within(() => {
    
          cy.get(elements.nomeCompleto)
            .should('contain', esperado.nomeCompleto)
    
          cy.get(elements.empresa)
            .first()
            .should('contain', esperado.empresa)
    
          cy.get(elements.empresa).then(($lis) => {
            const textoCompleto = $lis
              .toArray()
              .map((li) => li.innerText.trim())
              .join(' | ')
          
            expect(textoCompleto).to.include(esperado.rua)
            expect(textoCompleto).to.include(esperado.apto)
          })
    
          cy.get(elements.cidadeEstadoCep)
            .should('contain', esperado.cidade)
            .and('contain', esperado.estado)
            .and('contain', esperado.cep)
    
          cy.get(elements.pais)
            .should('contain', esperado.pais)
    
          cy.get(elements.telefone)
            .should('contain', esperado.telefone)
        })
    }

    
}
export default new metodos();