const expect = require('chai').expect

//Unfortunately I was not able to set up mock API... so these tests are not really relevant since it relays on real data...

describe('App test', () => {
  before(() => {
    $('~loginScreen').waitForDisplayed(11000, false)
  })

  it('Should login', () => {
    $("~username").setValue('VojtechSleichert')
    $("~password").setValue('test010203')

    $("~loginButton").click()

    $("~homeScreen").waitForDisplayed(11000)
    const isVisible = $("~homeScreen").isDisplayed()

    expect(isVisible).to.equal(true)
  })

  it('Should Open item detail', () => {
    $("~projectItem").click()

    $("~detailScreen").waitForDisplayed(11000)
    const isVisible = $("~detailScreen").isDisplayed()

    expect(isVisible).to.equal(true)
  })
  
  it('Should logout the User', () => {
    $("~logoutButton").click()

    $("~loginScreen").waitForDisplayed(11000)
    const isVisible = $("~loginScreen").isDisplayed()

    expect(isVisible).to.equal(true)
  })
})