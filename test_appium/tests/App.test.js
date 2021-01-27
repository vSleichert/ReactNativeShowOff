/* eslint-disable no-undef */
var expect = require('chai').expect

describe('User Searching', () => {
  before(() => {
    $('~app-root').waitForDisplayed(11000, false)
  })

  it('Should write username', () => {
    $("~username").setValue('vojta')
  })

  // it('Should find users', () => {
  //   $("~userSearchInput").setValue('vojta')

  //   $("~searchedUser").waitForDisplayed(11000)

  //   const isVisible = $("~searchedUser").isDisplayed()

  //   expect(isVisible).to.equal(true)
  // })

  // it('Should open user profile', () => {
  //   $("~searchedUser").click()

  //   $("~userProfileModal").waitForDisplayed(11000)

  //   const isVisible = $("~userProfileModal").isDisplayed()
  //   expect(isVisible).to.equal(true)
  // })

  // // it('Should become a fan', () => {
  // //   const isVisible = $("~subFullHeart").isDisplayed()

  // //   $("~subButton").click()
  // //   $("~subLoading").waitForDisplayed(11000)
  // //   $("~subLoading").waitForDisplayed({ reverse: true })

  // //   expect($("~subFullHeart").isDisplayed()).to.equal(!isVisible)
  // // })

  // it('Should open shop modal', () => {
  //   $("~merchButton").click()
  //   $("~merchModal").waitForDisplayed(11000)
  //   $("~merchButtonClose").click()
  //   $("~merchModal").waitForDisplayed({ reverse: true })
  // })

  // it('Should open instagram modal', () => {
    
  // })

  // it('Should open report actionsheet', () => {

  // })

  // it('Should close user profile', () => {
  //   $("~userProfileModalClose").waitForDisplayed(11000)
  //   $("~userProfileModalClose").click() //TODO we should find better solution on how to close modals

  //   $("~userProfileModal").waitForDisplayed({ reverse: true })

  //   const isVisible = $("~userProfileModal").isDisplayed()
  //   expect(isVisible).to.equal(false)
  // })

  // it('Should find no users', () => {
  //   $("~userSearchInput").setValue('NotExistingUserWhileTestingLol')

  //   $("~userSearchNoUsersFound").waitForDisplayed(11000)

  //   const isVisible = $("~userSearchNoUsersFound").isDisplayed()

  //   expect(isVisible).to.equal(true)
  // })

  // it('Should close user search', () => {
  //   $("~userSearchCloseButton").click()

  //   $('~app-root').waitForDisplayed(11000, false)

  //   const isVisible = $("~app-root").isDisplayed()
  //   expect(isVisible).to.equal(true)
  // })
})