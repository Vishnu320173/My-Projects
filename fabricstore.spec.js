//checking with add to cart

import { test, expect } from '@playwright/test';

test('fabricstore' , async({page})=>
{

await page.goto('https://wearethefabricstore.com/')
const hamburger= page.locator('//button[@class="mobile-menu__button mobile-menu__button--burger js-drawer-open"]')
await hamburger.click()

await page.locator('//ul[@class="mobile-nav mobile-nav--weight-bold"]//li//a[contains(text(),"New Arrivals")]').click()

//filtered

await page.locator('//button[@class="collection__filter__title label-typography"]//span[contains(text(),"Product Type")]').click() //clicked on product typr
const fabric= page.locator('//div[@id="CollectionFilter--product-type"]//descendant::*[contains(text(),"Fabric")]')  //clicked on fabric
await fabric.click()

const maincolour = page.locator('//div[@class="collection__filter"]//button//span[text()="Main Colour"]')
await maincolour.click()
await page.locator('//input[@id="filter-Main Colour-5"]').click({force:true}) //clicked on blue colour

await page.locator('//div[@class="collection__filter"]//button//span[contains(text(),"Pattern")]').click()
const noPattern = page.locator('//label[@class="filter__button"]//parent::li//input[@id="filter-Pattern-2"]')
await noPattern.click({force:true})


await page.locator('//a[text()="Boiled Wool Coating - Pacific"]').click() //clicked on product

await page.pause()

const USD = page.locator('')
await USD.click()


await page.waitForTimeout(2000)
})