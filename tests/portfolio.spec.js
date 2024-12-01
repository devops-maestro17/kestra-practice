const {test, expect} = require('@playwright/test');

test('@Verify homepage visibilility and links', async ({page}) => {
    await page.goto("");
    const heroTitle = page.locator(".hero-title");
    const backGround = page.locator("#developerGif");
    const knowMoreBtn = page.locator("p.hero-cta > a");
    const aboutMeSection = page.locator("#about .section-title");

    await expect(heroTitle).toBeVisible();
    await expect(backGround).toBeVisible();
    
    await knowMoreBtn.click();
    await expect(aboutMeSection).toContainText("About me");
    
})

test('@Verify About me section', async ({page}) => {
    await page.goto("/#about");
    const aboutMeContent = page.locator(".about-wrapper__info-text").first();
    const resumeBtn = page.locator("div.d-flex .cta-btn--resume");
    const githubLink = page.locator("i.fa-github");
    const linkedinLink = page.locator("i.fa-linkedin");
    const credlyLink = page.locator(".fa-certificate");
    await aboutMeContent.waitFor();
    await expect(aboutMeContent).toBeVisible();
    await expect(resumeBtn).toBeEnabled();
    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
    await expect(credlyLink).toBeVisible();

})

test("@Verify projects section", async({page}) => {
    await page.goto("");
    const projectTitle = page.locator(".project-wrapper > h2");
    const projectContent = page.locator(".project-wrapper__text");
    const projectBtn = page.locator(".project-wrapper__text");
    const projectImg = page.locator(".project-wrapper__image");

    await projectTitle.scrollIntoViewIfNeeded();

    for (let i = 0; i <= 2 ; i++){
        await expect(projectContent.locator(".mb-4").nth(i)).toBeVisible();
        await expect(projectBtn.locator("a").nth(i)).toBeVisible();
        await expect(projectImg.locator(".img-fluid").nth(i)).toBeVisible();
    }
})

test("@Verify credentials section", async({page}) => {
    await page.goto("");
    const certificationHeader = page.locator("#certifications > div >h2");
    const certificationTitle = page.locator(".certification-wrapper__text-title");
    const certificationDescription = page.locator(".certification-wrapper__text > div > p");
    const credentialBtn = page.locator(".certification-wrapper__text > a");

    await certificationHeader.scrollIntoViewIfNeeded();
    await expect(certificationTitle).toBeVisible();
    await expect(certificationDescription).toBeVisible();
    await expect(credentialBtn).toBeVisible();

})

test("@Verify footer section", async ({page}) => {
    const footerSection = page.locator("#contact div.container");
    const helloBtn = page.locator("#contact div a");

    await expect(footerSection).toBeVisible()
    await expect(helloBtn).toBeVisible()
})