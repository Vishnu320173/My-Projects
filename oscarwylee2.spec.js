// Project Oscar wylee


import { test, expect } from '@playwright/test';
import { clearScreenDown } from 'readline';

test('image', async ({page})=>
{
await page.goto('https://www.oscarwylee.com.au/')
await page.locator('//a[@id="ui-id-3"]').hover()

const men = page.locator('//span[text()="Men"]//parent::a[@id="ui-id-14"]')
await men.click()

await page.locator('//input[@id="search-desktop"]').fill('Serge Large')
await page.locator('//div[@class="action desktop-search-button"]').click()
await page.waitForLoadState()

const product =page.locator('//div[@class="product details product-item-details"]//strong/a[contains(text(),"Serge")]').first()
await product.click()
await page.waitForLoadState('load')

await page.locator('//div[@class="swatch color-smokey-marmalade"]').click
await page.locator('//span[text()="Add to cart"]//parent::button[@class="action primary tocart"]').click()
await page.locator('//label[@for="prescription_5533_method_upload"]').click()

const filepath = 'C:\\Users\\HCZ LAP - 156\\Documents\\Screenshot 2025-08-07 224850.png';
await page.locator('//input[@id="prescription_5533_upload"]').setInputFiles(filepath)
await page.locator('//div//input[@class="prescription button"]').click()       // file uploaded


const reading= page.locator('//span[text()="Reading"]//parent::label[@for="prescription_5534_type_single-vision-near"]')
await reading.click()


await page.selectOption('//select[@id="prescription_5534_single_near_pd"]', {index : 5})

const Ultimate= page.locator('//div[contains(text(),"Ultimate Thin")]//ancestor::label[@for="prescription_5534_index_1-74"]')
await Ultimate.click()
await page.locator('//input[@class="lenses button"]').click() //selected ultimate and clicked contine

await page.locator('//label[@for="prescription_5534_coating_super-multi"]').click() //clicked premium anti reflective
await page.locator('//input[@class="addons button"]').click()
await page.waitForTimeout(1000)

await page.locator('//input[@class="review button"]').click() //cliked on add to cart
await page.waitForLoadState('load')

await page.locator('//div[@class="minicart-wrapper"]//descendant::a[@class="action showcart"]').click()
const viewcart= page.locator('//div[@class="actions"]//descendant::div//a[@class="action primary checkout"]')
await viewcart.click()
await page.waitForLoadState('load')

await page.screenshot({path : 'Checkout.png'})
const checkout= page.locator('//ul[@class="checkout methods items checkout-methods-items"]//descendant::li//button[@class="action primary checkout"]')
await checkout.click()

await page.waitForTimeout(2000)
})


test.only('line', async ({page})=>
{
await page.goto('https://www.oscarwylee.com.au/')

await page.locator('//div[@class="swatch color-smokey-marmalade"]').click
await page.locator('//span[text()="Add to cart"]//parent::button[@class="action primary tocart"]').click()
await page.locator('//label[@for="prescription_5533_method_upload"]').click()

})

