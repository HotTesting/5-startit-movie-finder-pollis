import { browser, $, $$, element, By, Key} from 'protractor'

describe('Movie card ', async function(){
    
    it('Last movie should have name', async function(){
        await browser.get('/'); 
        let movieCardTitle_first = $$ ('movie-card').first().$('.text-ellipsis [title]');;       
                       
        expect(await movieCardTitle_first.isDisplayed()).toBe(true);
    })

    it('First movie should have name', async function(){
        await browser.get('/');
        let movieCardTitle_last = $$('movie-card').last().$('.text-ellipsis [title]');          
                
        expect(await movieCardTitle_last.isDisplayed()).toBe(true);              
    })

    it('First movie should have "raiting" pointer', async function(){
        await browser.get('/');
        let movieCardRaiting_first = $$ ('movie-card').first().$('small');;       
                        
        expect(await movieCardRaiting_first.isDisplayed()).toBe(true);
    })

    it('Last movie should have "raiting" pointer', async function(){
        await browser.get('/'); 
        let movieCardRaiting_last = $$ ('movie-card').first().$('small');;       
                     
        expect(await movieCardRaiting_last.isDisplayed()).toBe(true);
    })
     
    it('should open appropriate "movie details" page, after click on "name" field', async function(){
        await browser.get('/');
        let movieCardTitle_first = $$('movie-card').first().$('.text-ellipsis a');
        let movieCardHref = await movieCardTitle_first.getAttribute('href');        
        await movieCardTitle_first.click(); 

        expect(await browser.getCurrentUrl()).toEqual(movieCardHref); 
    })

    it('check link', async function(){
        await browser.get('/')
        let movieCardTitle_last = $$('movie-card').last().$('.text-ellipsis a');
        let movieCardHref = await movieCardTitle_last.getAttribute('href');
        await movieCardTitle_last.click();

        expect(await browser.getCurrentUrl()).toEqual(movieCardHref);
    })

describe('Navigation ',async function() {
    
    it('should open "Upcoming movies" section', async function() {
        await browser.get('/');
        let upcomingMoviesSectionNavigatonButton = $('a[routerlink*="upcoming"]');
        const upcomingMoviesSectionLink = 'https://movies-finder.firebaseapp.com/upcoming';                
        await upcomingMoviesSectionNavigatonButton.click();

        expect(await browser.getCurrentUrl()).toEqual(upcomingMoviesSectionLink); 
    })

    it('should open "Popular Series" section', async function(){
        await browser.get('/');
        let popularSeriesSectionNavigationButton = $('a[routerlink*="popular/series"]');
        const popularSeriesSectionLink = 'https://movies-finder.firebaseapp.com/popular/series';
        await popularSeriesSectionNavigationButton.click();

        expect(await browser.getCurrentUrl()).toEqual(popularSeriesSectionLink);
    })

    it('should open "Action" category', async function(){
        await browser.get('/');
        let actionSectionNavigationButton = $('a[href*="/Action"]');
        const actionSectionLink = 'https://movies-finder.firebaseapp.com/genres/28/Action';
        await actionSectionNavigationButton.click();

        expect(await browser.getCurrentUrl()).toEqual(actionSectionLink);
    })


describe('Search ', async function(){

    it('by exisiting name, should show first movie with complete name match', async function(){
        await browser.get('/');            
        let existingMovieTitleForSearch = await $$('movie-card').get(4).$('.text-ellipsis [title]').getText();
        let searchField = $('input[name="searchStr"]');
    
        await searchField.sendKeys(existingMovieTitleForSearch, Key.ENTER);
        await browser.sleep(5000);            
        expect(await $$('movie-card').first().$('.text-ellipsis [title]').getText()).toEqual(existingMovieTitleForSearch);
        // Movie's name is "Your Name.", First movie's name after searching is "Call Me by Your Name", Test shoud fail
    })
})
})
})