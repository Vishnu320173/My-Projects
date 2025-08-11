import { test, expect } from '@playwright/test';

test('oscar', async ({page})=>
{
await page.goto('https://www.oscarwylee.com.au/')

await page.locator('//a[@class="level-top ui-corner-all"]//span[text()="Glasses"]').hover()

const men = page.locator('//a[@id="ui-id-14"]//span[text()="Men"]')
await expect(men).toBeVisible()
await men.click()     // clicked on men

await page.waitForTimeout(2000)

await page.locator('//div[@class="toolbar-top"]//descendant::label[@class="filter-label"]').click()  //clicked on filter

await page.locator('//span[@class="swatch-small color-gold"]').click                // clicked colour gold
await page.locator('//a[@id="tab-label-pattern-title"]').click()                   // clikced pattern
await page.locator('//span[@class="swatch-small pattern-transparent"]').click()    //clicked pattern type
await page.locator('//a[@id="tab-label-face-shape-title"]').click()                // clicked face type
await page.locator('//button[@class="filter-link"]//child::span[contains(text(),"Oval")]').click() // clicked on shape
await page.locator('//a[@id="tab-label-width-title"]').click()                     // clicked on width
await page.locator('//button[@class="filter-link"]//span[contains(text(),"Medium")]').click()  //clicked medium
await page.locator('//div[@id="tab-label-material"]//a[@id="tab-label-material-title"]').click()  //clicked material
await page.locator('//button[@class="filter-link"]//child::span[contains(text(),"Titanium")]').click //clicked Titanium

// to check whether the filteration has been done properly

try
{
await page.locator('//div[@class="filter-reset"]//div[contains(text(),"Gold, Oval, Mediium, Titanium")]').first()
console.log("Elements filtered")
}catch
{
    console.log("Filtered elements not found")
}


await page.locator('//div[@class="product details product-item-details"]//a[contains(text(),"Micah")]').click()  //clicked on product
await page.waitForLoadState()

await page.locator('//span[text()="Add to cart"]//parent::button[@class="action primary tocart"]').click() //clicked add to cart

await page.locator('//div[@class="send-later field choice required"]//label[contains(text(),"Non prescription")]').click() 
await page.locator('//input[@class="addons button"]').click()


await page.locator('//input[@class="review button"]').click()  // clicked add to cart

await page.locator('//span[text()="My Cart"]//parent::a[@class="action showcart"]').click()
await page.locator('//span[text()="View Cart"]//parent::a[@class="action primary checkout"]').click() //clicked view cart

await page.locator('//span[text()="Proceed to Checkout"]//parent::button[@class="action primary checkout"]').click() // clicked proceed to checkout
await page.waitForLoadState()

await page.screenshot({path :'Oscarwylee.png'}) // screenshot of product added for checkout

})




// create an account

// await page.locator('//span[text()="Create an Account"]//parent::a[@class="action create primary"]').click()

// await page.locator('//input[@id="firstname"]').fill("Vishnu")
// await page.locator('//input[@id="lastname"]').fill("Dev")
// await page.locator('//input[@id="email_address"]').fill("vishnudevv230@gmail.com")
// await page.locator('//input[@id="password"]').fill("Vishnudev230")
// await page.locator('//input[@id="password-confirmation"]').fill("Vishnudev230")

// const frame =page.frameLocator('//iframe[@title="reCAPTCHA"]')
// await frame.locator('//span[@id="recaptcha-anchor"]').click()

// await page.locator('//span[text()="Create an Account"]//parent::button[@class="action submit primary"]').click() // create account

// await page.waitForLoadState('load')
// await page.waitForTimeout(1000)

// await page.locator('//div[@class="control"]//input[@id="KWJ0A83"]').fill('Trends')
// await page.locator('//input[@id="G2SJNM1"]').fill('23 MountRD')

// await page.selectOption('//select[@id="B8V8CJV"]' , {index : 6})
// await page.locator('//input[@id="FJ5HY12"]').fill('Tanzania')
// await page.locator('//input[@id="JY0QNA8"]').fill('11101')
// await page.locator('//input[@id="K3DIO9G"]').fill('9895351509')

// await page.locator('//span[text()="Next"]//parent::button[@class="button action continue primary"]').click()

// await page.waitForTimeout(2000)
// await page.screenshot({path :'Payment.png'})

// 
