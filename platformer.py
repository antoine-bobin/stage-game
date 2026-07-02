import pygame
import sys

# Initialisation de Pygame
pygame.init()

# Constantes
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FPS = 60
GRAVITY = 0.6
PLAYER_SPEED = 5
JUMP_POWER = 12

# Couleurs
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
DARK_GRAY = (51, 51, 51)

# Configuration de l'écran
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Platformer 2D")
clock = pygame.time.Clock()

# Classe du joueur
class Player:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.width = 30
        self.height = 30
        self.velocity_x = 0
        self.velocity_y = 0
        self.is_jumping = False
        self.spawn_x = x
        self.spawn_y = y

    def handle_input(self, keys):
        if keys[pygame.K_LEFT] or keys[pygame.K_a]:
            self.velocity_x = -PLAYER_SPEED
        elif keys[pygame.K_RIGHT] or keys[pygame.K_d]:
            self.velocity_x = PLAYER_SPEED
        else:
            self.velocity_x = 0

        if (keys[pygame.K_SPACE] or keys[pygame.K_w]) and not self.is_jumping:
            self.velocity_y = -JUMP_POWER
            self.is_jumping = True

    def update(self, platforms):
        # Appliquer la gravité
        self.velocity_y += GRAVITY

        # Mise à jour de la position
        self.x += self.velocity_x
        self.y += self.velocity_y

        # Limites latérales
        if self.x < 0:
            self.x = 0
        if self.x + self.width > SCREEN_WIDTH:
            self.x = SCREEN_WIDTH - self.width

        # Détection des collisions avec les plateformes
        self.is_jumping = True

        for platform in platforms:
            # Collision par le bas (atterrissage)
            if (
                self.velocity_y >= 0
                and self.y + self.height <= platform.y + 10
                and self.y + self.height + self.velocity_y >= platform.y
                and self.x + self.width > platform.x
                and self.x < platform.x + platform.width
            ):
                self.y = platform.y - self.height
                self.velocity_y = 0
                self.is_jumping = False

            # Collision par le haut (frapper la tête)
            if (
                self.velocity_y < 0
                and self.y >= platform.y + platform.height - 10
                and self.y - self.velocity_y <= platform.y + platform.height
                and self.x + self.width > platform.x
                and self.x < platform.x + platform.width
            ):
                self.velocity_y = 0
                self.y = platform.y + platform.height

        # Réinitialiser si tombé
        if self.y > SCREEN_HEIGHT:
            self.x = self.spawn_x
            self.y = self.spawn_y
            self.velocity_x = 0
            self.velocity_y = 0

    def draw(self, surface):
        pygame.draw.rect(surface, BLACK, (self.x, self.y, self.width, self.height))


# Classe des plateformes
class Platform:
    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height

    def draw(self, surface):
        pygame.draw.rect(surface, DARK_GRAY, (self.x, self.y, self.width, self.height))


# Initialiser le joueur
player = Player(50, 400)

# Créer les plateformes
platforms = [
    Platform(0, 550, 800, 50),        # Sol
    Platform(200, 450, 150, 20),      # Plateforme 1
    Platform(500, 380, 150, 20),      # Plateforme 2
    Platform(150, 300, 120, 20),      # Plateforme 3
    Platform(550, 280, 150, 20),      # Plateforme 4
    Platform(350, 220, 100, 20),      # Plateforme 5
]

# Boucle principale
running = True
while running:
    clock.tick(FPS)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Récupérer les touches pressées
    keys = pygame.key.get_pressed()

    # Mettre à jour le joueur
    player.handle_input(keys)
    player.update(platforms)

    # Dessiner
    screen.fill(WHITE)
    for platform in platforms:
        platform.draw(screen)
    player.draw(screen)

    # Afficher les contrôles
    font = pygame.font.Font(None, 24)
    text = font.render("Fleches: Bouger | Espace: Sauter", True, BLACK)
    screen.blit(text, (10, 10))

    pygame.display.flip()

pygame.quit()
sys.exit()
