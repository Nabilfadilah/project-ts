import { Builder, By, WebDriver, until } from "selenium-webdriver";
import * as Chrome from 'selenium-webdriver/chrome';
import * as assert from 'assert';

// dIgunakan untuk mendefinisikan pengujian, diberi label pada pengujian dengan
// [INTEGRATION] <PortalOfflineMedia />
describe('[INTEGRATION] <PortalOfflineMedia />', () => {

    // mendefinisikan variabel driver yang akan digunakan untuk mengontrol WebDriver.
    let driver: WebDriver;

    // membuat instance webDriver menggunakan Chrome Browser.
    beforeEach(async () => {
        const opts = new Chrome.Options();

        // set untuk mengontrol perilaku webDriver seperti detachDriver(false)
        // untuk mencegah driver dari detach setelah sesi selesai.
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(opts.detachDriver(false))
            .build();
    });
    // WebDriver akan di-quit setelah setiap pengujian selesai.
    afterEach(async () => {
        await driver.quit();
    });

    // Fungsi login digunakan untuk mengotomatisasi proses login ke halaman dengan menggunakan WebDriver.
    const login = async () => {
        await driver.get('http://localhost:3000/users/sign_in');
        // pengunaan (sleep) sebelum mencari elemen untuk memastikan halaman sudah terload sepenuhnya.
        await driver.sleep(2000)

        // Setelah memasuki halaman login, elemen-elemen seperti email, password, 
        // dan tombol login akan dicari dan diinteraksi menggunakan WebDriver.
        let email = await driver.findElement(By.name('email'));
        let password = await driver.findElement(By.name('password'));
        let loginButton = await driver.findElement(
            By.js(() => {
                return document.querySelector('[type="submit"]');
            })
        );

        // sendKeys = adalah alat memasukkan teks ke dalam bidang seperti form input
        await email.sendKeys('intern@nolimit.id');
        await password.sendKeys('admin');
        await loginButton.submit();

        await driver.wait(until.urlContains('monitoring'), 30_000);

        //fetch url
        let url = await driver.getCurrentUrl();
        assert.equal(url, 'http://localhost:3000/monitoring/postmade');
    };

    // testing untuk membuka halaman portal offline media
    it('Pengguna dapat membuka halaman portal offline media', async () => {
        // login terlebih dahulu dengan memanggil fungsi login().
        await login();

        // Kemudian, WebDriver akan membuka halaman 
        await driver.get('http://localhost:3000/pr-value/portal-offline-media');

        // Assert digunakan untuk memastikan bahwa URL halaman saat ini sesuai dengan yang diharapkan.
        assert.equal(
            await driver.getCurrentUrl(),
            'http://localhost:3000/pr-value/portal-offline-media'
        );
    }, 50000);

    // testing untuk mengklik button Add New portal offline media dan Back 
    it('Pengguna dapat membuka halaman portal offline media', async () => {
        // login terlebih dahulu dengan memanggil fungsi login().
        await login();

        // Kemudian, WebDriver akan membuka halaman 
        await driver.get('http://localhost:3000/pr-value/portal-offline-media');

        // Assert digunakan untuk memastikan bahwa URL halaman saat ini sesuai dengan yang diharapkan.
        assert.equal(
            await driver.getCurrentUrl(),
            'http://localhost:3000/pr-value/portal-offline-media'
        );

        // add button
        // WebDriver mencari elemen tombol "Add New" dan mengkliknya.
        const addButton = await driver.findElement(
            By.js(() => document.querySelector('.MuiButton-root.MuiButton-contained'))
        );
        await addButton.click();

        // WebDriver menunggu hingga URL berubah sesuai dengan harapan.
        await driver.wait(until.urlContains('create'));

        // Assert digunakan untuk memastikan bahwa URL halaman saat ini sesuai dengan yang diharapkan.
        assert.equal(
            await driver.getCurrentUrl(),
            'http://localhost:3000/pr-value/portal-offline-media?action=create'
        );

        // back button 
        // WebDriver mencari elemen tombol "Back" dan mengkliknya.
        const backButton = await driver.findElement(
            By.js(() => document.querySelector('.MuiButton-root.MuiButton-outlined'))
        );
        await backButton.click();

        // Assert digunakan untuk memastikan bahwa URL halaman saat ini sesuai dengan yang diharapkan.
        assert.equal(
            await driver.getCurrentUrl(),
            'http://localhost:3000/pr-value/portal-offline-media'
        );
    }, 100000);
});

// Semua pengujian dalam suite ini telah didefinisikan.
// Kode ini mengotomatisasi langkah-langkah yang akan dijalankan oleh WebDriver saat menguji halaman web. Setiap pengujian melakukan serangkaian tindakan pada halaman dan memeriksa apakah perilaku dan hasilnya sesuai dengan yang diharapkan. Jika ada perbedaan antara perilaku aktual dan yang diharapkan, pengujian akan gagal dan memberikan laporan error.
