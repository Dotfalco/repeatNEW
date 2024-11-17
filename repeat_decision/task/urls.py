from django.urls import path
from . import views

urlpatterns = [
    # Page routes
    path('', views.index, name='index'),  # Add root path
    path('index/', views.index, name='index'),
    path('consent/', views.consent, name='consent'),
    path('thankyou/', views.thankyou, name='thankyou'),
    
    # Testing route
    path('test_db/', views.test_db, name='test-db'),
    
    # Data saving endpoints - simplified to use path() instead of re_path
    path('task/save_phaseone_data/', views.save_phaseone_data, name='save_phaseone_data'),
    path('task/save_phasetwo_data/', views.save_phasetwo_data, name='save_phasetwo_data'),
    path('task/save_phaseoneconfidence_data/', views.save_phaseoneconfidence_data, name='save_phaseoneconfidence_data'),
    path('task/save_phasetwoconfidence_data/', views.save_phasetwoconfidence_data, name='save_phasetwoconfidence_data'),
    path('task/save_phasetworepeat_data/', views.save_phasetworepeat_data, name='save_phasetworepeat_data'),
    path('task/save_ques_data/', views.save_ques_data, name='save_ques_data'),
]
