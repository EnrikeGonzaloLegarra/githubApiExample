import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    let listComponent: ListComponent
    TestBed.configureTestingModule({
      imports: [ FormsModule , HttpModule],
      declarations: [
        AppComponent,
        ListComponent,
        HeaderComponent,
        SearchComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const list= fixture.debugElement.componentInstance;
    const header = fixture.debugElement.componentInstance;
    const search = fixture.debugElement.componentInstance;
    const inputSearch = ' '
    expect(app).toBeTruthy();
    expect(header).toBeTruthy();
    expect(search).toBeTruthy(inputSearch)
    expect(list).toBeTruthy();

  }));


});
