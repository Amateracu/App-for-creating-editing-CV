import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs';
import { IBreadCrumbs } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IMenu } from 'src/app/shared/interfaces/menu.interface';
import { INavItem } from 'src/app/shared/interfaces/nav-item.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { UrlService } from 'src/app/shared/services/url.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: IBreadCrumbs[] = [];
  currentUrl: string = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private urlService: UrlService,
    private breadcrumbService: BreadcrumbsService,
  ) {}

  ngOnInit() {
    this.setDefaultBreadcrumb();
    this.listenForRouteChange();
    this.listenForBreadcrumbUpdate();
  }

  private setDefaultBreadcrumb() {
    this.setCurrentUrl();

    if (this.currentUrl) {
      let navItem: INavItem = this.findRoute();

      if (navItem) {
        let breadcrumb: IBreadCrumbs = { name: navItem.displayName, url: this.currentUrl };
        this.breadcrumbs.push(breadcrumb);
      }
    }
  }

  private listenForBreadcrumbUpdate() {
    this.breadcrumbService.getBreadCrumbs().subscribe((str: string) => {
      this.handleBreadcrumbUpdate(str);
    });
  }

  private handleBreadcrumbUpdate(str: string) {
    let lastBreadcrumb: IBreadCrumbs = this.breadcrumbs[this.breadcrumbs.length - 1];

    if (lastBreadcrumb.pauseDisplay) {
      lastBreadcrumb.pauseDisplay = false;
      lastBreadcrumb.name = str;
    }
  }

  private listenForRouteChange() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        distinctUntilChanged(),
      )
      .subscribe((route: ActivatedRoute) => this.handleCurrentRoute(route));
  }

  private setCurrentUrl() {
    let url: string = this.router.url;

    if (url) {
      this.currentUrl = this.urlService.shortenUrlIfNecessary(url.substring(1));
    }
  }

  private handleCurrentRoute(route: ActivatedRoute) {
    this.setCurrentUrl();

    let navItem: INavItem = this.findRoute(IMenu);

    if (navItem) {
      this.handleTopLevelBreadcrumb(navItem);
    } else {
      this.addBreadcrumb(route);
    }
  }

  private addBreadcrumb(route: ActivatedRoute) {
    if (this.breadcrumbs.length < 6) {
      let breadcrumb!: IBreadCrumbs;

      route.data.subscribe((data: any) => {
        breadcrumb = {
          name: data.breadcrumb,
          url: this.currentUrl,
          pauseDisplay: data.pauseDisplay,
        };
      });

      if (breadcrumb) {
        if (breadcrumb.url != this.breadcrumbs[this.breadcrumbs.length - 1].url) {
          route.queryParams.subscribe((queryParams: any) => {
            if (queryParams) {
              breadcrumb.queryParams = queryParams;
            }
          });

          this.breadcrumbs.push(breadcrumb);
        }
      }
    }
  }

  private handleTopLevelBreadcrumb(navItem: INavItem) {
    this.breadcrumbs = [];

    let breadcrumb: IBreadCrumbs = { name: navItem.displayName, url: navItem.route };

    this.breadcrumbs.push(breadcrumb);
  }

  private findRoute(navItems?: INavItem[]): INavItem {
    if (!navItems) navItems = IMenu;

    let returnedItem!: INavItem;

    if (this.currentUrl) {
      for (let item of navItems) {
        if (this.currentUrl == item.route) {
          returnedItem = item;
          break;
        } else if (item.children) {
          returnedItem = this.findRoute(item.children);
          if (returnedItem != null) break;
        }
      }
    }

    return returnedItem;
  }

  routeTo(index: number) {
    if (index < this.breadcrumbs.length - 1) {
      this.breadcrumbs.splice(index + 1);
    }

    let breadcrumb: IBreadCrumbs = this.breadcrumbs[index];

    let route = breadcrumb.url;
    this.router.navigate([route], { queryParams: breadcrumb.queryParams });
  }
}
